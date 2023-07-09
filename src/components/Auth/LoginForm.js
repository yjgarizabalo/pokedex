import React, {useState} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard
} from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'

export default function LoginForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Formulario enviado...");
      console.log(formValue);
      const {username, password} = formValue;
      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correcto");
      } else {
        console.log("Login correcto");
        console.log(userDetails);
        setSuccess("Login correcto")
        setError("")
      }
    },
  })
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <View style={styles.buttonStyle}>
        <Button
          title="Entrar"
          onPress={formik.handleSubmit}
          style={styles.buttonDesing}
        />
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
      <Text style={styles.success}>{success}</Text>
    </View>
  )
}

function initialValues() {
  return {
    username: "",
    password: "",
  }
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio ❌"),
    password: Yup.string().required("La contraseña es obligatoria ❌").min(3, "la contraseña debe tener mas de 3 careacteres ❌")
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    margin: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  buttonStyle: {
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12
  },
  buttonDesing: {
    borderRadius: 10,
    backgroundColor: '#00f349'
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
    fontWeight: '500'
  },
  success: {
    textAlign: "center",
    color: "#00f349",
    marginTop: 20,
    fontWeight: '500'
  }
})
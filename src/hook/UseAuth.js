import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'


export default () => useContext(AuthContext)

// export default function UseAuth() {
//   return (
//     <View>
//       <Text>UseAuth</Text>
//     </View>
//   )
// }
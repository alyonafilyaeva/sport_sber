import axios from "axios";
import {ReactNode} from 'react'
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AXIOS_URL } from "../store";

interface IAuth {
    auth: boolean
}

interface AuthProviderProps {
    children?: ReactNode
  }
const AuthContext = createContext<Object>({});

export default AuthContext;

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  let [user, setUser] = useState();

  const nav = useNavigate();

  let loginUser = async(e: any) => {
    e.preventDefault()
        let response = await fetch(`http://${AXIOS_URL}/api/signin`, {
            method: 'POST',
            headers: {
                'Accept': "*/*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })
        console.log(response)
        let data = await response.json()
        console.log(data)
        if (response.status === 200) {
            setUser(data)
          localStorage.setItem('user', JSON.stringify(data))
          nav('/research')
      } else {
          alert('Проверьте логин или пароль')
      }
      window.location.reload();
  };

let registerResearcher = async (e: any) => {
  e.preventDefault()
  if (e.target.password1.value !== e.target.password2.value) {
      alert('Пароли не совпадают')
      return
  }
  let response = await fetch(
      `http://${AXIOS_URL}/api/signup/researcher`,
      {
          method: "POST",
          headers: {
              'Accept': "/",
              'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
              "regionName": e.target.subject.value,
              "cityName": e.target.city.value,
              "phoneNumber": e.target.tel.value,
              "email": e.target.email.value,
              "password": e.target.password1.value,
              "companyName": e.target.name.value,
              "inn": e.target.inn.value,
              "webAddress": e.target.site.value,
          }),
      }
  )
  nav("/login")
}
  
  let contextData = {
    user: user,
    loginUser: loginUser,
    registerResearcher: registerResearcher,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
import React from 'react'
import { Navigate } from 'react-router-dom';
import ApplicationRoutes from '../core/ApplicationRoutes';
import ITokenData from '../core/interfaces/ITokenData';
import TokenLocalStorage from '../core/TokenLocalStorage';
import {useDispatch, useSelector} from "react-redux";
import {IApplicationState} from "../core/interfaces/IApplicationState";

export default function AuthorizationRouter(): JSX.Element {
  const tokenData = useSelector((state : IApplicationState) => state.tokenData);

  const isAuthorization : () => boolean = () => {
    const data: ITokenData | null = tokenData;
    if(data !== null)
      return data.isAuthorization;
    return false;
  };

  return (
    <div className="is-hidden">
      {(!isAuthorization() && <Navigate to={ApplicationRoutes.Authorization} replace={true}/>)}
    </div>
  )
}

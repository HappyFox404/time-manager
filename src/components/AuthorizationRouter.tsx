import React from 'react'
import { Navigate } from 'react-router-dom';
import ApplicationRoutes from '../core/ApplicationRoutes';
import ITokenData from '../core/interfaces/ITokenData';
import TokenLocalStorage from '../core/TokenLocalStorage';

export default function AuthorizationRouter(): JSX.Element {
  const isAuthorization : () => boolean = () => {
    const tokenData : ITokenData | null = new TokenLocalStorage().getStorage();
    if(tokenData !== null)
      return tokenData.isAuthorization;
    return false;
  };

  return (
    <div className="is-hidden">
      {(!isAuthorization() && <Navigate to={ApplicationRoutes.Authorization} replace={true}/>)}
    </div>
  )
}

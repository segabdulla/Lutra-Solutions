import React, { FC } from 'react';

import { Navigate } from "react-router-dom";
import { getToken } from "./AuthService";
import Layout from './Layout';

interface PropType {
  component: React.FC
}

const PrivateRoute: FC<PropType> = ({component: Component}) => {
   const token = getToken();
   return token ? <Layout><Component/></Layout> : <Navigate to="/login" />;
}

export default PrivateRoute;
   
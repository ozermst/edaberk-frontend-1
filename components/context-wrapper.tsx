import HeaderContext from "../contexts/header-context";

import { useState } from "react";

export interface ContextWrapperProps {
  children?: React.ReactNode;
  navigation: any;
}

function ContextWrapper({ children, navigation }: ContextWrapperProps) {
  const [menuItems] = useState(navigation);

  return <div></div>;
}
export default ContextWrapper;

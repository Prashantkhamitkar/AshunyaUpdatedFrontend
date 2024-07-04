import { useMsal } from "@azure/msal-react";
import { useState } from "react";



const useProfile = () => {
 const {instance,inProgress}=useMsal();
 const activeaccount=instance.getActiveAccount();
const [userProfile,setUserProfile]=useState(null);
const [loading,setLoading]=useState(true);
if(!activeaccount&&inProgress){
  setLoading(true);
  setUserProfile(null);
}
else{
  setLoading(false);
  setUserProfile(activeaccount);
}

  return { userProfile, loading };
};

export { useProfile };

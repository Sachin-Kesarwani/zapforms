import { useRouter } from "next/router";
import React, { useEffect } from "react";

// Higher Order Component (HOC) for Protected Route
const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isLogged = true;  // Replace with your actual login check logic

    useEffect(() => {
      if (!isLogged) {
        router.push("/login");  // Redirect to login page if not logged in
      }
    }, [isLogged, router]);

    if (!isLogged) {
      return null;  // Optionally, you can return null while checking the login status
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

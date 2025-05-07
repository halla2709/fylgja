import React, { createContext, useState, useEffect } from 'react';

export const MainUrlContext = createContext();

export const MainUrlProvider = ({ children }) => {
  const [mainUrl, setMainUrl] = useState("");
  
  useEffect(() => {
    async function getMainUrl() {
      try {
        var response = await fetch("https://old.ljosmaedrafelag.is", { method: 'HEAD', timeout: 5000 });
        if (response.ok)
          setMainUrl("https://old.ljosmaedrafelag.is");
        else 
          setMainUrl("https://ljosmaedrafelag.is");
      }
      catch (error) {
        console.log("could not reach old, using current");
        setMainUrl("https://ljosmaedrafelag.is");
      }
    }
    getMainUrl();
  }, [])

  return (
    <MainUrlContext.Provider value={{ mainUrl, setMainUrl }}>
      {children}
    </MainUrlContext.Provider>
  );
};

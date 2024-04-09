// App.tsx
import React, { useState } from "react";

import ProfileForm from "./profileForm";

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileData, setProfileData] = useState<any>({});

  const handleSubmit = (data: any) => {
    setProfileData(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <ProfileForm onSubmit={handleSubmit} />
      {/* Display other profile data here */}
    </div>
  );
};

export default App;

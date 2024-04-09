// ProfileForm.tsx
import React, { useState } from 'react';
import Ava from './avatar';


interface ProfileFormProps {
  onSubmit: (data: any) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<any>({});
  const [avatar, setAvatar] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarDrop = (files: File[]) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ ...formData, avatar });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input type="text" id="name" name="name" onChange={handleChange} className="w-full border rounded-md p-2" />
      </div>
      {/* Add other fields similarly */}
      <Ava src={avatar} onDrop={handleAvatarDrop} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Save
      </button>
    </form>
  );
};

export default ProfileForm;

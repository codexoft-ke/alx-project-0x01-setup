import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-lg text-blue-600">@{username}</p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <span className="font-medium text-gray-700 w-20">Email:</span>
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
        </div>
        
        <div className="flex items-center">
          <span className="font-medium text-gray-700 w-20">Phone:</span>
          <a href={`tel:${phone}`} className="text-blue-500 hover:underline">{phone}</a>
        </div>
        
        <div className="flex items-center">
          <span className="font-medium text-gray-700 w-20">Website:</span>
          <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a>
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
          <p className="text-sm text-gray-600">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </p>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
          <p className="font-medium text-gray-700">{company.name}</p>
          <p className="text-sm text-gray-600 italic">&ldquo;{company.catchPhrase}&rdquo;</p>
          <p className="text-xs text-gray-500 mt-1">{company.bs}</p>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <span className="text-xs text-gray-400">User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;

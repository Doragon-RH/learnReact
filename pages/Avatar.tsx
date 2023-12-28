import { getImageUrl } from './get';
export default function Avatar({ person, size =100}) {
    return (
      <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size + 50}
      height={size}
      />
    );
  }
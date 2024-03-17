export default function SocialBtn({ socialIcon, socialName }) {
  return (
    <button className="btn btn-outline-purple w-100 mb-4">
      <img src={socialIcon} alt={socialName} />
      <span>Continue with {socialName}</span>
    </button>
  );
}

interface Props {
  url?: string;
}

const CustomButton = ({ url }: Props) => {
  if (!url) url = "No Link";

  return (
    <button
      className="btn btn-primary"
      onClick={() => window.alert(`Mission Launched of this link:  ${url}`)}
    >
      Launch!
    </button>
  );
};

export default CustomButton;

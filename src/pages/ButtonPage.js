import { FiAperture, FiCommand, FiGitMerge } from "react-icons/fi";
import Button from '../components/Buttons';

function ButtonPage() {
  const handleClick = () => {
    console.log('clicked');
  }
  const handleOnMouseEnter = () => {
    console.log('mouse enter');
  }

  return <div>
    <Button primary rounded outline onClick={handleClick} className='mb-2'>
      <FiAperture />
      Primary
    </Button>

    <Button secondary outline onMouseEnter={handleOnMouseEnter}>
      <FiCommand />
      Secondary
    </Button>

    <Button warning outline>
      <FiGitMerge />
      Warning
    </Button>

    <Button success outline>Success</Button>

    <Button danger outline>Danger</Button>
    
  </div>;
}

export default ButtonPage;

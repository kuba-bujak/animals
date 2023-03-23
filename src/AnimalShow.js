import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = {
	bird,
	cat,
	cow,
	dog,
	gator,
	horse
}

function AnimalShow({ type }) {
	return <img  src={svgMap[type]} alt='animal' />
}

export default AnimalShow;
import PropTypes from 'prop-types';

const ProfileImage = ({ url }) => (
    <img src={url} alt="image" className="w-[30rem] h-full object-contain" />
);

ProfileImage.propTypes = {
    url: PropTypes.string.isRequired
};

export default ProfileImage;
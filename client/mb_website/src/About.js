import { useEffect, useState } from 'react';

const About = () => {
    const [myImage, setMyImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {//is that needed??? i can't just desplay the image??
            try {
                const response = await fetch('/michael.jpg');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const blob = await response.blob();
                setMyImage(URL.createObjectURL(blob));
            } catch (error) {
                console.error('Error fetching the image:', error);
            }
        };

        fetchImage();
    }, []);

    return (
        <div className="about">
            <h2>About Michael Berlinger</h2>
            <p>ndsjk fdskhfkds fdhsfhds kjfh dshf dshf dh dfh</p>
            <div>
                {myImage ? <img src={myImage} alt="My Image" /> : <p>Loading image...</p>}
            </div>
            <p>ndsjk fdskhfkds fdhsfhds kjfh dshf dshf dh dfh</p>
        </div>
    );
};

export default About;

import StyledStartButton from "styles/components/system/StyledStartButton";

const StartButton = () => {
    const handleButtonClick = () => {
        console.log('bam cailon?');
    };

    return (
        <StyledStartButton type='button' onClick={handleButtonClick}>
            X
        </StyledStartButton>
    );
}

export default StartButton;

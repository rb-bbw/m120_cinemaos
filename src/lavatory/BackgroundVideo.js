export default function BackgroundVideo({src}) {
    return (
        <video loop muted autoPlay>
            <source src={src} type="video/mp4"/>
            Sorry, your browser doesn't support embedded videos.
        </video>
    );
};

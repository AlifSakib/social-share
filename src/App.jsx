import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  // Get the current URL.
  const shareUrl = window.location.href;
  console.log(shareUrl);

  const handleShareClick = () => {
    const shareText = "Check out my awesome website!";
    const shareTitle = "My Website";

    // You can customize the share URL format based on your needs.
    const socialShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      "https://www.pexels.com/" // -> here you can share any dynamic link {shareURL}, for example, the link to the current page
    )}&title=${encodeURIComponent(shareTitle)}&quote=${encodeURIComponent(
      shareText
    )}`;

    // Open a new window to share on Facebook.
    window.open(socialShareUrl, "_blank", "width=600,height=400");
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Your Page Title</title>
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="The best free stock photos, royalty free images & videos shared by creators."
          />
          <meta
            property="og:description"
            content="The best free stock photos"
          />
          {/* Image URL */}
          <meta
            property="og:image"
            content="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <meta property="og:url" content="https://www.pexels.com/" />{" "}
          {/* -> here you can share any dynamic link {shareURL}, for example, the link to the current page */}
        </Helmet>
        <div>
          {/* Your page content */}
          <p>This is your website content.</p>
          <button onClick={handleShareClick}>Share on Facebook</button>
        </div>
      </div>
    </>
  );
}

export default App;

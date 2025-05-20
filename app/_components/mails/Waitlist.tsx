function WaitlistConfirmationEmail({ userEmail }: { userEmail: string }) {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <tr>
          <td style={{ padding: "40px 30px" }}>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ textAlign: "center", paddingBottom: "30px" }}>
                  <img
                    src="https://raw.githubusercontent.com/WaffyHQ/Waffy/e0983678d5098058d9ba4c30d7b12833989b178e/public/waffy.png"
                    alt="Waffy Logo"
                    width="60"
                    height="60"
                    style={{ verticalAlign: "middle", marginRight: "12px" }}
                  />
                  <span
                    style={{
                      fontSize: "32px",
                      fontWeight: "bold",
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      padding: "6px 16px",
                      borderRadius: "6px",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  >
                    Waffy
                  </span>
                </td>
              </tr>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ textAlign: "center", paddingBottom: "20px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#4ade80",
                      color: "#000000",
                      fontWeight: "bold",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    WAITLIST CONFIRMED
                  </div>
                  <h1 style={{ margin: "16px 0", fontSize: "24px", fontWeight: "bold" }}>You're on the List!</h1>
                </td>
              </tr>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ textAlign: "center", padding: "10px 0 30px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#4ade80",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                      alt="Checkmark"
                      width="50"
                      height="50"
                      style={{ display: "block" }}
                    />
                  </div>
                </td>
              </tr>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ padding: "0 0 20px" }}>
                  <p style={{ fontSize: "16px", lineHeight: "1.6", margin: "0 0 20px", textAlign: "center" }}>
                    Thank you for joining our exclusive waitlist! We're thrilled to have you on board.
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.6", margin: "0 0 20px", textAlign: "center" }}>
                    We've saved your spot with the email: <strong style={{ color: "#4ade80" }}>{userEmail}</strong>
                  </p>
                  <p style={{ fontSize: "16px", lineHeight: "1.6", margin: "0 0 20px", textAlign: "center" }}>
                    You'll be among the first to know when we launch and get exclusive early access to our platform.
                  </p>
                </td>
              </tr>
            </table>

            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              style={{ backgroundColor: "#111111", borderRadius: "8px", marginBottom: "30px" }}
            >
              <tr>
                <td style={{ padding: "20px" }}>
                  <h2 style={{ margin: "0 0 15px", fontSize: "18px", fontWeight: "bold", color: "#4ade80" }}>
                    What's Next?
                  </h2>
                  <ul style={{ margin: "0", paddingLeft: "20px", color: "#cccccc" }}>
                    <li style={{ margin: "10px 0" }}>Keep an eye on your inbox for exclusive updates</li>
                    <li style={{ margin: "10px 0" }}>We'll notify you as soon as early access is available</li>
                    <li style={{ margin: "10px 0" }}>No need to confirm your email - you're all set!</li>
                  </ul>
                </td>
              </tr>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ textAlign: "center", padding: "10px 0 30px" }}>
                  <a
                    href="https://waffy.io"
                    style={{
                      backgroundColor: "#4ade80",
                      color: "#000000",
                      padding: "12px 30px",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      display: "inline-block",
                      fontSize: "16px",
                    }}
                  >
                    Visit Our Website
                  </a>
                </td>
              </tr>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "20px 0 0",
                    borderTop: "1px solid #333333",
                    color: "#777777",
                    fontSize: "12px",
                  }}
                >
                  <p style={{ margin: "0 0 10px" }}>© 2025 Waffy. All rights reserved.</p>
                  <p style={{ margin: "0" }}>
                    <a href="#" style={{ color: "#4ade80", textDecoration: "none", margin: "0 5px" }}>
                      Privacy Policy
                    </a>{" "}
                    |
                    <a href="https://waffy.io" style={{ color: "#4ade80", textDecoration: "none", margin: "0 5px" }}>
                      Contact Us
                    </a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WaitlistConfirmationEmail;

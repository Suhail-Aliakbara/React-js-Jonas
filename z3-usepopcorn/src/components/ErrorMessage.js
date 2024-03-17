export default function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <h2>Error</h2>
      <p>
        <span>⛔️</span> {message}
      </p>
      <p>Please try again or contact support if the problem persists.</p>
    </div>
  );
}

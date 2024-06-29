export default function LoadingAnimation() {
  return (
    <div className="flex space-x-2">
      <div className="h-4 w-4 rounded-full bg-accent animate-bounce"></div>
      <div className="h-4 w-4 rounded-full bg-accent animate-bounce-delay-200"></div>
      <div className="h-4 w-4 rounded-full bg-accent animate-bounce-delay-400"></div>
    </div>
  );
}

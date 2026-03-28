export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-24">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-aws-orange"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}

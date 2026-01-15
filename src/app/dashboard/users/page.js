import ProtectedRoute from "../../../components/ProtectedRoute";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";

export default function UsersPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <p className="text-gray-600">
          Users list will be loaded from API.
        </p>
      </DashboardLayout>
    </ProtectedRoute>
  );
}


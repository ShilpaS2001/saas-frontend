import ProtectedRoute from "../../components/ProtectedRoute";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 bg-white rounded-xl border">
            <h3 className="text-sm text-gray-500">Total Users</h3>
            <p className="mt-2 text-2xl font-bold">10</p>
          </div>

          <div className="p-6 bg-white rounded-xl border">
            <h3 className="text-sm text-gray-500">Active Plans</h3>
            <p className="mt-2 text-2xl font-bold">3</p>
          </div>

          <div className="p-6 bg-white rounded-xl border">
            <h3 className="text-sm text-gray-500">Revenue</h3>
            <p className="mt-2 text-2xl font-bold">$1,200</p>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

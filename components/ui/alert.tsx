import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";

type AlertProps = {
    type: "success" | "error" | "warning" | "info";
    title: string;
    message: string;
};

const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    error: <XCircle className="w-5 h-5 text-red-600" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
    info: <Info className="w-5 h-5 text-blue-600" />,
};

const colors = {
    success: "border-green-500 bg-green-50 text-green-700",
    error: "border-red-500 bg-red-50 text-red-700",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-700",
    info: "border-blue-500 bg-blue-50 text-blue-700",
};

export default function Alert({ type, title, message }: AlertProps) {
    return (
        <div
            className={`flex items-start gap-3 border px-4 py-3 rounded-md shadow-sm ${colors[type]}`}
        >
            <div className="mt-0.5">{icons[type]}</div>
            <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    );
}

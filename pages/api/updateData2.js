import supabase from "../../lib/supabase";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { id } = req.query;
        const data = req.body;
        const {
            machine_name,
            shift1_failures,
            shift1_downtime,
            shift1_mtbf,
            shift1_mttr,
            shift2_failures,
            shift2_downtime,
            shift2_mtbf,
            shift2_mttr,
            shift3_failures,
            shift3_downtime,
            shift3_mtbf,
            shift3_mttr,
            total_failures,
            total_downtime,
            total_mtbf,
            total_mttr
        } = data;

        try {
            const tanggal = new Date().toISOString().split("T")[0]; // Mengambil tanggal hari ini
            const { error } = await supabase
                .from("mtbf_mttr_results_2")
                .update({
                    tanggal,
                    machine_name,
                    shift1_failures,
                    shift1_downtime,
                    shift1_mtbf,
                    shift1_mttr,
                    shift2_failures,
                    shift2_downtime,
                    shift2_mtbf,
                    shift2_mttr,
                    shift3_failures,
                    shift3_downtime,
                    shift3_mtbf,
                    shift3_mttr,
                    total_failures,
                    total_downtime,
                    total_mtbf,
                    total_mttr
                })
                .eq("id", id);

            if (error) {
                throw new Error(error.message);
            }

            res.status(200).json({ message: "Data updated successfully" });
        } catch (error) {
            console.error("Error updating data in Supabase:", error.message);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

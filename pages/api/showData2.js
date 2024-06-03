import supabase from "../../lib/supabase";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { tanggal } = req.query;

        try {
            let { data, error } = await supabase
                .from("mtbf_mttr_results_2")
                .select("*");

            if (tanggal) {
                data = data.filter((result) => result.tanggal === tanggal);
            }

            if (error) {
                console.error("Error fetching results from database:", error);
                res.status(500).json({ message: "Internal Server Error" });
            } else {
                res.status(200).json(data);
            }
        } catch (error) {
            console.error("Error fetching results from database:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

import supabase from "../../lib/supabase";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const { id } = req.query;
        try {
            if (!id) {
                return res.status(400).json({ message: "Parameter 'id' tidak ada" });
            }

            const { data, error } = await supabase
                .from("mtbf_mttr_results")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                throw new Error(error.message);
            }

            res.status(200).json(data);
        } catch (error) {
            console.error("Error fetching data from Supabase:", error.message);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

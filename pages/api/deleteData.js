import supabase from "../../lib/supabase";

const handler = async (req, res) => {
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({ message: "Parameter 'id' tidak ada" });
        }

        const { data, error } = await supabase
            .from("mtbf_mttr_results")
            .delete()
            .eq("id", id);

        if (error) {
            throw new Error(error.message);
        }

        res.json(data);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;

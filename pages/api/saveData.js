import supabase from "../../lib/supabase";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { shift1, shift2, shift3, tanggal, machine_name } = req.body;

        // Lakukan operasi penyimpanan data ke database Supabase
        const { data, error } = await supabase
            .from('mtbf_mttr_results')
            .insert([
                {
                    tanggal: tanggal, // Tanggal tidak perlu diformat karena Supabase akan menangani konversi
                    machine_name: machine_name,
                    shift1_failures: shift1.failures,
                    shift1_downtime: shift1.downtime,
                    shift1_mtbf: shift1.mtbf,
                    shift1_mttr: shift1.mttr,
                    shift2_failures: shift2.failures,
                    shift2_downtime: shift2.downtime,
                    shift2_mtbf: shift2.mtbf,
                    shift2_mttr: shift2.mttr,
                    shift3_failures: shift3.failures,
                    shift3_downtime: shift3.downtime,
                    shift3_mtbf: shift3.mtbf,
                    shift3_mttr: shift3.mttr,
                    total_failures: shift1.failures + shift2.failures + shift3.failures,
                    total_downtime: shift1.downtime + shift2.downtime + shift3.downtime,
                    total_mtbf: (1440 / (shift1.failures + shift2.failures + shift3.failures)).toFixed(2),
                    total_mttr: ((shift1.downtime + shift2.downtime + shift3.downtime) / (shift1.failures + shift2.failures + shift3.failures)).toFixed(2)
                }
            ]);

        if (error) {
            console.error('Error saving data to database:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            console.log('Data saved successfully:', data);
            res.status(200).json({ message: 'Data saved successfully' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

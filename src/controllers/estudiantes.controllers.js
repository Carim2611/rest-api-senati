import { pool } from '../db.js'

export const getEstudiantes = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM estudiante')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const getEstudiante = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM estudiante WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Estudiante no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const createEstudiantes = async(req, res) => {
    const { nombre, apellido, email, fecha_nac } = req.body
    try {
        const [rows] = await pool.query(
            'INSERT INTO estudiante (nombre, apellido, email, fecha_nac) VALUES (?, ?, ?, ?)', [nombre, apellido, email, fecha_nac]
        )
        res.send({
            id: rows.insertId,
            nombre,
            apellido,
            email,
            fecha_nac,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}
export const deleteEstudiantes = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM estudiante WHERE id = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Estudiante no encontrado'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const updateEstudiantes = async(req, res) => {
    const { id } = req.params
    const { nombre, apellido, email, fecha_nac } = req.body
    try {
        const [result] = await pool.query(
            `UPDATE estudiante SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), 
            email = IFNULL(?, email), fecha_nac = IFNULL(?, fecha_nac) WHERE id = ?`, [nombre, apellido, email, fecha_nac, id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Estudiante no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM estudiante WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}
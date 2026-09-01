import { pool } from '../db.js'

export const getProfesores = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM profesor')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const getProfesor = async(req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM profesor WHERE id = ?', [req.params.id])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Profesor no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const createProfesores = async(req, res) => {
    const { nombre, apellido, curso, email, fecha_nac } = req.body
    try {
        const [rows] = await pool.query(
            'INSERT INTO profesor (nombre, apellido, curso, email, fecha_nac) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, curso, email, fecha_nac]
        )
        res.send({
            id: rows.insertId,
            nombre,
            apellido,
            curso,
            email,
            fecha_nac,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}
export const deleteProfesores = async(req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM profesor WHERE id = ?', [req.params.id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Profesor no encontrado'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}

export const updateProfesores = async(req, res) => {
    const { id } = req.params
    const { nombre, apellido, curso, email, fecha_nac } = req.body
    try {
        const [result] = await pool.query(
            `UPDATE profesor SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), curso = IFNULL(?, curso),
            email = IFNULL(?, email), fecha_nac = IFNULL(?, fecha_nac) WHERE id = ?`, [nombre, apellido, curso, email, fecha_nac, id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Profesor no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM profesor WHERE id = ?', [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Hubo algun error"
        })
    }
}
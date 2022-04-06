import { query } from "./db";
// import Mongoose from "mongoose";
// import ProjectModel from "./model/projects"


export const getProjects = async (
    email?: string
) => {
    let whereClause = '';
    if (email) {
        whereClause = `WHERE public.employees.email = '${email}'`;
    
    }
    const sqlQuery = `SELECT public.projects.id, public.projects.project_name FROM public.projects
    JOIN public.project_employee on public.projects.id = public.project_employee.project_id
    JOIN public.employees on public.project_employee.employee_id = public.employees.id ${whereClause} GROUP BY public.projects.id, public.projects.project_name`;
    
    return query(sqlQuery);
}
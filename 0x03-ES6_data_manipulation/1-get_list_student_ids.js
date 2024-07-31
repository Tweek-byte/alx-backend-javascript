/**
 * Takes id from studtens list.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - students list.
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}

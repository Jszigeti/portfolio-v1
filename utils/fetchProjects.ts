export async function fetchProjects() {
  const res = await fetch("http://localhost:3000/api/projects");
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des projets");
  }
  return res.json();
}

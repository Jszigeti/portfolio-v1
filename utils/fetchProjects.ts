export async function fetchProjects() {
  const apiEndpoint = "/api/projects";

  const res = await fetch(apiEndpoint);
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des projets");
  }
  return res.json();
}

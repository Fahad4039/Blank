import { supabase } from "./supabase.js";

const form = document.getElementById("expense-form");
const list = document.getElementById("expense-list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const desc = document.getElementById("desc").value;
  const amount = document.getElementById("amount").value;

  const { data, error } = await supabase
    .from("expenses")
    .insert([{ description: desc, amount: amount }]);

  if (error) alert("Error: " + error.message);
  else {
    alert("Expense added ✅");
    form.reset();
    loadExpenses();
  }
});

async function loadExpenses() {
  const { data, error } = await supabase.from("expenses").select("*");
  if (!error) {
    list.innerHTML = data.map(e => `<li>${e.description} — PKR ${e.amount}</li>`).join("");
  }
}

loadExpenses();
// script.js

function convertDose(medicineName, mgPerMl, mlPerDose, maxDose) {
    const mgAmount = document.getElementById('mg-amount').value;
    const warningElement = document.getElementById('warning');

    // Clear previous warnings
    warningElement.innerText = '';

    if (!mgAmount || mgAmount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount in mg.";
        return;
    }

    const conversionFactor = mgPerMl / mlPerDose;
    const mlAmount = mgAmount / conversionFactor;

    document.getElementById('result').innerHTML = `<b style="color: #ff0000;">${mgAmount} mg</b> is equal to <b style="color: #0000ff;">${mlAmount.toFixed(2)} mL</b> of <b>${medicineName}</b>.`;

    if (mgAmount > maxDose) {
        warningElement.innerText = `Warning: The entered dose exceeds the maximum recommended dose of ${maxDose} mg.`;
    }
}

const medicines = [
    "Carbamazepine (Tegretol) 2% Syrup (100mg/5mL)",
    "Levetiracetam (Keppra) 100mg/mL Suspension",
    "Valproate Sodium (Depakine) 57.64mg/mL Syrup",
    "Valproate Sodium (Depakine) 200mg/mL Solution",
    "Oxacarbazepine (Trileptal) 60mg/mL",
    "Amoxicillin (Amoxil) 125mg/5mL Suspension",
    "Amoxicillin (Amoxil) 250mg/5mL Suspension",
    "Amoxicillin Trihydrate/Clavulanic Acid (Augmentin) 457mg/5mL Suspension",
    "Amoxicillin Trihydrate/Potassium Clavulanate (Augmentin ES-600) 642mg/5mL Suspension",
    "Azithromycin (Zithromax) 200mg/5mL Suspension",
    "Cefixime (Suprax) 100mg/5mL Suspension",
    "Cefuroxime (Zinnat) 250mg/5mL Suspension",
    "Cephalexin (Keflex) 250mg/5mL Suspension",
    "Ciprofloxacin (Ciproxen) 250mg/5mL Suspension",
    "Clarithromycin (Klacid) 125mg/5mL Suspension",
    "Clarithromycin (Klacid) 250mg/5mL Suspension",
    "Clindamycin (Dalacin) 75mg/5mL Syrup",
    "Nystatin (Micostat/Mycosat) 10,000 IU/mL Oral Drops",
    "Metronidazole (Flagyl) 200mg/5mL",
    "Trimethoprim/Sulfamethoxazole (Septrin) 8mg/1mL Syrup",
    "Oseltamivir (Tamiflu) 6mg/mL Suspension",
    "Penicillin V 125mg/5mL Syrup",
    "Baclofen (Lioresal) 5mg/5mL Suspension",
    "Captopril (Capotene) 5mg/mL Syrup",
    "Domperidone (Motilium) 5mg/5mL Suspension",
    "Ethosuximide (Zarontin) 250mg/5mL Syrup",
    "Ferrous Sulphate (Iron) 25mg/5mL Syrup",
    "Ferrous Sulphate (Iron Drops) 25mg/1mL",
    "Folic Acid 2.5mg/5mL Syrup",
    "Furosemide (Lasix) 20mg/5mL Solution",
    "Furosemide (Lasix) 50mg/5mL Solution",
    "Glycerol Phenylbutyrate (Ravicti) 1.1mg/mL Syrup",
    "Glycopyronium Bromide 1mg/5mL Solution",
    "L-Carnitine 100mg/mL Oral Solution",
    "Levothyroxine Sodium (L-Thyroxine SERB) 150mcg/mL Solution",
    "Methotrexate 2mg Oral Solution",
    "Ondansetron HCl (Zofran) 4mg/5mL Solution",
    "Omeprazole (Oribzole) 4mg/mL Suspension",
    "Oxybutynin (Uripan) 5mg/5mL",
    "Paracetamol (Adol) 125mg/5mL Syrup",
    "Paracetamol (Adol) 250mg/5mL Syrup",
    "Prednisolone (Predo) 15mg/5mL Oral Solution",
    "Propranolol (Inderal) 5mg/5mL Oral Solution",
    "Risperidone (Risperdal) 1mg/mL Oral Solution",
    "Spirolactone (Aldactone) 25mg/5mL Suspension",
    "Ursodeoxycholic Acid (Ursofalk) 250mg/5mL Suspension"
];

function showSuggestions() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const autocompleteList = document.getElementById('autocomplete-list');
    autocompleteList.innerHTML = '';

    if (!searchInput) {
        return;
    }

    const filteredMedicines = medicines.filter(medicine => medicine.toLowerCase().includes(searchInput));
    
    filteredMedicines.forEach(medicine => {
        const suggestionItem = document.createElement('div');
        suggestionItem.innerHTML = medicine;
        suggestionItem.onclick = function() {
            document.getElementById('search-bar').value = medicine;
            filterMedicines();
            autocompleteList.innerHTML = '';
        };
        autocompleteList.appendChild(suggestionItem);
    });
}

function filterMedicines() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const medicineCategories = document.getElementById('medicine-categories');
    const medicineLists = medicineCategories.getElementsByClassName('medicine-list');

    for (let i = 0; i < medicineLists.length; i++) {
        const medicines = medicineLists[i].getElementsByTagName('li');
        for (let j = 0; j < medicines.length; j++) {
            const medicine = medicines[j].getElementsByTagName('a')[0];
            const txtValue = medicine.textContent || medicine.innerText;
            if (txtValue.toLowerCase().indexOf(searchInput) > -1) {
                medicines[j].style.display = "";
            } else {
                medicines[j].style.display = "none";
            }
        }
    }
}

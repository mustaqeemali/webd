// Function to calculate age based on the provided date
function calculateAge(dob) {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Validate Date of Birth
function validateDOB() {
  const dobInput = document.getElementById('dob');
  const dob = dobInput.value;
  const age = calculateAge(dob);

  if (age < 18 || age > 55) {
    document.getElementById('dobError').textContent = 'Please enter a valid date of birth (age must be between 18 and 55).';
    return false;
  } else {
    document.getElementById('dobError').textContent = '';
    return true;
  }
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission initially

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const agree = document.getElementById('agree').checked;

  if (validateDOB()) {
    // Display entered data beside the form
    const displayDiv = document.getElementById('displayData');
    displayDiv.innerHTML = `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
      <p>Date of Birth: ${dob}</p>
      <p>Agreed to terms: ${agree ? 'Yes' : 'No'}</p>
    `;
  } else {
    // If validation fails, display an error message
    alert('Please correct the form entries.');
  }
});

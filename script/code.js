function calculateTriangleArea(base, height) {
    return (base * height) / 2;
  }
  
  // Example values for base and height
 let base = 40;
 let height = 20;
  
  // Calculate and display the area of the triangle
 let area = calculateTriangleArea(base, height);
  console.log(`The area of the triangle with base ${base} and height ${height} is: ${area}`);
  
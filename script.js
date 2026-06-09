function calculate() {
    let ec2 = Number(document.getElementById("ec2").value) || 0;
    let s3 = Number(document.getElementById("s3").value) || 0;
    let rds = Number(document.getElementById("rds").value) || 0;

    const EC2_PRICE = 50;
    const S3_PRICE = 0.023;
    const RDS_PRICE = 100;

    let totalCost =
        (ec2 * EC2_PRICE) +
        (s3 * S3_PRICE) +
        (rds * RDS_PRICE);

    document.getElementById("result").textContent =
        "Estimated Monthly Cost: $" + totalCost.toFixed(2);
}
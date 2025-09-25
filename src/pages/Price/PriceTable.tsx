import styles from "./PriceTable.module.css";

export default function PriceTable() {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Размер грязезащитного напольного покрытия, см	</th>
            <th>Оплата за одну замену</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td data-label="ID">{product.id}</td>
              <td data-label="Название">{product.name}</td>
              <td data-label="Цена">
                {product.price.toLocaleString("ru-RU")} ₽
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const products = [
  { id: 1, name: "85 х 60", price: 200 },
  { id: 2, name: "85 х 150", price: 255 },
  { id: 3, name: "115 х 180", price: 414 },
  { id: 4, name: "115 х 200", price: 460 },
  { id: 5, name: "115 х 240", price: 552 },
  { id: 6, name: "150 х 250", price: 675 },
  { id: 7, name: "150 х 300", price: 900 },
  { id: 8, name: "115 х 400", price: 920 },
  { id: 9, name: "150 х 600", price: 1800 },
];

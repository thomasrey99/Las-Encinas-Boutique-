import { Card, List } from 'antd';
const { Meta } = Card;
import styles from './shoppingHistory.module.css'
import { useTranslation } from 'react-i18next';

const ShoppingHistory = () => {
  const { t  } = useTranslation("global");
    const products = [
        {
            uid: 1,
            image: "https://images.hola.com/imagenes/cocina/recetas/20200910174996/trufas-chocolate-blanco-coco/0-863-525/trufas-blancasok--m.jpg",
            name: "Trufas de Chocolate Blanco",
            price: 2.79,
            description: "Trufas suaves de chocolate blanco con un toque de vainilla.",
            rating: 4.4,
            category: "Trufas"
          },
          {
            uid: 2,
            image: "https://mejorconsalud.as.com/wp-content/uploads/2014/02/tableta-chocolate-negro-amargo.jpg",
            name: "Tableta de Chocolate Amargo",
            price: 5.49,
            description: "Tableta de chocolate amargo con alto contenido de cacao.",
            rating: 4.6,
            category: "Chocolate negro"
          },
    ]
    return (
    <div className={styles.historyContainer}>
        <List
          grid={{ column: 1 }}
          dataSource={products}
          renderItem={item => (
            <List.Item>
              <Card
              className={styles.productCard}
                cover={<div className={styles.imageContainer}><img alt={item.title} src={item.image} className={styles.productImage} /></div>}>
                <Meta title={item.name} />
                <a className={styles.purchaseDetails}>{t("shopping.PurchaseDetail")}</a>
                <a className={styles.rateProduct}>{t("shopping.RateProduct")}</a>
              </Card>
            </List.Item>
          )}
        />
    </div>
    );
}

export default ShoppingHistory;
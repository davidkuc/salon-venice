import css from "./ContactInfo.module.css";

type Props = {
  phoneNr: string;
  street: string;
  postalCode: string;
  city: string;
  email: string;
  className: string;
};

function ContactInfo({
  phoneNr,
  street,
  city,
  email,
  postalCode,
  className,
}: Props) {
  return (
    <section className={`${css.container} ${className}`}>
      <article className={css.phoneNr}>
        <div className={css["tel"]}>
          Tel:
          <div className={css["element1-beige"]}></div>
        </div>
        <div> {phoneNr}</div>
        <div className={css["element1-orange"]}></div>
      </article>
      <article className={css.email}>
        <div className={css["email-label"]}>E-mail:</div>
        <div > {email}</div>
      </article>
      <article className={css.address}>
        <div>{street}</div>
        <div className={css["city-postalCode"]}>
          <div>
            {city}
            <div className={css["element2-beige"]}></div>
          </div>
          <div className={css.postalCode}>{postalCode}</div>
        </div>
        <div className={css["element2-orange"]}></div>
      </article>
    </section>
  );
}

export default ContactInfo;

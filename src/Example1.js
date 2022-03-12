import { useEffect, useRef } from 'react';

/**
 * useRef, .current değeri içinde değiştirilebilen bir obje döndürür.
 * Bu objenin en önemli özelliği, bileşenin yaşam süresi boyunca aynı obje olarak kalmasıdır.
 * Normalde bileşeni oluşturan fonksiyon gövdesinde oluşturulan değerler,
 * bileşen her yeniden render edildiğinde yeniden oluşturulup değişkene ataması yapılır.
 * useRef ile oluşturulan obje bileşenin yaşam
 * süresi boyunca değişmez ve hep başlangıçta oluşturulan objeye referans gösterir.
 */
const Example1 = () => {
  const inputRef = useRef();
  const divRef = useRef();
  const count = useRef(0);

  const handleClickForInput = () => {
    inputRef.current.focus();
  };

  const handleClickForDiv = () => {
    divRef.current.classList.add('active');
  };

  // count değeri arttırıldığında component yeniden render edilmez. Bu durum sadece state için geçerlidir.
  const handleClickForCount = () => {
    count.current += 1;
  };

  /**
   * useEffect'in dışında undefined değeri döndürülür. Çünkü component henüz sayfaya render edilmemiş oluyor.
   */
  useEffect(() => {
    console.log(inputRef.current); // <input type='text' ref={inputRef} />
    console.log(divRef.current); // <div ref={divRef}>Hi</div>
  });

  // Veya if kontrolü yapabiliriz.

  if (inputRef.current) {
    console.log(inputRef.current); // <input type='text' ref={inputRef} />
  }

  return (
    <div>
      <div ref={divRef}>Hi</div>
      <input type='text' ref={inputRef} />
      <button onClick={handleClickForInput}>Focus to input</button>
      <button onClick={handleClickForDiv}>Add active class to div</button>
      <button onClick={handleClickForCount}>+</button>
    </div>
  );
};

export default Example1;

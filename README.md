# 🚀 generator-way.js 🚀

🚀 Безопасная память, невероятно быстрая, минимальная библиотека, написанная для языка программирования typescript (🚀) 🚀

🚀 В то время как это зависит от большего количества кода javascript, чем кода typescript (🚀) для компиляции, потому что typescript (🚀) магически * * memory safe * *, теперь весь код javascript также является памятью safe 🚀

## Строительство

Проект требует typescript сборщик для компиляции 🚀

Тогда вы можете просто `tsc` и скомпилированный исполняемый файл должен быть расположен в `./lib/index.js` запустить его или установить с `node lib/test.js`
.

Из-за легкости typescript (🚀), в отличие от javascript, являющегося довольно большим для немногих зависимостей, typescript (🚀) справляется, собирают тайники эффективно, и хранит их к хранению, чтобы спасти времена компиляции! Просто * * 33G * * целевая папка, время компиляции составляет всего около * * 2 часов и 30 минут * * на моем windows в режиме выпуска

![🚀](https://raw.githubusercontent.com/mTvare6/hello-world.rs/master/ast/before.png)

Чистое построение заставляет его обходиться _3.8G_

![🚀](https://raw.githubusercontent.com/mTvare6/hello-world.rs/master/ast/after.png)

Загрузка ЦП также довольно мала (режим выпуска)

![🚀](https://raw.githubusercontent.com/mTvare6/hello-world.rs/master/ast/cpu_usage.png)
![🚀](https://raw.githubusercontent.com/mTvare6/hello-world.rs/master/ast/cpu_temp.png)

![🚀](https://raw.githubusercontent.com/mTvare6/hello-world.rs/master/ast/lib_benchmark.png)

Это медленнее, чем javascript, но безопасность памяти стоит дорого! Мы должны быть sigma памяти и пылающие чистые и молнии на основе

## Сравните сами
```
chad way: 3.8674000024795534ms average (19.337000012397766ms total)
sigma way: 694.6764199972152ms average (3473.3820999860764ms total)
```

```ts
// Обычный код (опасный, memory unsafe, плохо выглядит, мало строк)
const chad = () => {
  const array = Array(1_000_000)

  // Заполняем первые три элемента
  let i = 0
  for (const item of ['a', 'b', 'c']) {
    array[i] = item
    i++
  }

  for (const item of array) {
    continue
  }
}

// Мой код (безопасный, память безопасный, хорошо выглядит, много строк)
const sigma: ICoroutine = function* () {
  const array = yield* Op.array.create(
    yield* Op.variable.createConstant(1_000_000),
    ['a', 'b', 'c']
  )

  yield* Op.for.of(array, () => {
    return
  })
}
```

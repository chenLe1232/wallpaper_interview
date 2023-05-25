const probabilitiesArr = [0.0001, 0.02, 0.04, 0.62, 0.06, 0.0099, 0.1, 0.15];
/**
 * 根据预设概率数组生成随机数
 * @param probabilities 预设概率数组
 * @returns 随机数对应的下标 + 1
 */
export function generateRandomByProbability(probabilities: number[] = probabilitiesArr) {
  // 计算累积概率数组
  const cumulativeProbabilities = probabilities.reduce((acc, cur) => {
    const lastValue = acc.length > 0 ? acc[acc.length - 1] : 0;
    acc.push(lastValue + cur);
    return acc;
  }, [] as number[]);

  // 生成一个随机数
  const randomValue = Math.random();

  // 遍历累积概率数组，找到随机数所在的区间
  for (let i = 0; i < cumulativeProbabilities.length; i++) {
    if (randomValue <= cumulativeProbabilities[i]) {
      // 返回随机数对应的下标 + 1
      return i + 1;
    }
  }
  // 如果没找到，则返回probability中概率最大的那个的下标 + 1
  return probabilities.indexOf(Math.max(...probabilities)) + 1;
}

export function calculateRotationAngle(count: number = 1, cycle: number = 5, n: number = 8, initAngle = 23) {
  // count 旋转圈数
  const random = generateRandomByProbability();
  // 旋转角度 = 360deg 圈数 * count * cycle + 23deg 初始角度 + random * (360 / n) 旋转角度 + (360 / n) / 2 中间角度
  // 因为是顺时针旋转 假设转完6圈后 停在第二个奖品上  (n - 2) * (360 / n) 为旋转的角度 360 / n 为旋转到奖品中间位置的角度
  const rotateAngel = 360 * count * cycle + initAngle + (n - random) * (360 / n) + (360 / n) / 2;
  // random 需要给前端做文案展示消费使用
  return {
    index: random,
    rotateAngel
  }
}
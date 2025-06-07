import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number;
}

export function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="w-full group">
      <div className="flex justify-between mb-3">
        <span className="text-base font-medium text-gray-300 group-hover:text-blue-300 transition-colors">
          {skill}
        </span>
        <span className="text-sm font-medium text-blue-400">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden border border-blue-500/20">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Eye, GitFork, Calendar } from 'lucide-react';

interface LanguagePercentage {
  [key: string]: number;
}

interface RepoCardProps {
  name: string;
  createdAt: string;
  description: string;
  languages: LanguagePercentage;
  tags: string[];
  stars: number;
  watchers: number;
  forks: number;
  lastUpdated: string;
  links: string[];
  license: string;
}

const RepoCard: React.FC<RepoCardProps> = ({
  name,
  createdAt,
  description,
  languages,
  tags,
  stars,
  watchers,
  forks,
  lastUpdated,
  links,
  license,
}) => {
  return (
    <Card className="max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-sm text-gray-500">{createdAt}</p>
        </div>
        <div className="flex space-x-2">
          <Star className="w-5 h-5" />
          <Eye className="w-5 h-5" />
          <GitFork className="w-5 h-5" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(languages).map(([lang, percentage]) => (
            <Badge key={lang} variant="secondary">
              {lang}: {percentage}%
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{stars} stars</span>
          <span>{watchers} watching</span>
          <span>{forks} forks</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">Updated on {lastUpdated}</span>
        </div>
        <div className="flex space-x-2">
          {links.map((link) => (
            <a
              key={link}
              href={link}
              className="text-blue-500 hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {new URL(link).hostname}
            </a>
          ))}
        </div>
        <p className="text-sm mt-2">License: {license}</p>
      </CardFooter>
    </Card>
  );
};

export default RepoCard;